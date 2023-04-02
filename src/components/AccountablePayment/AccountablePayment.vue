<script setup>
import { vMaska } from 'maska'
</script>

<script>
const MODEL_PAYMENT = {
  value: 0,
}

export default {
  props: {
    totalPrice: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      form: {
        payment: {
          separation: [],
        },
      },

      rules: {
        value: [
          v =>
            (!!v && this.moneyoptions.preProcess(v) !== '0') ||
            'Valor é obrigatório',
        ],
      },

      valid: true,
      is_readonly: false,

      moneyoptions: {
        preProcess: val => {
          if (typeof val !== 'string') {
            return
          }

          return val.replace(/[R$.]/g, '').replace(/\s/g, '').replace(/,/g, '.')
        },
        postProcess: val => {
          if (!val) {
            return ''
          }

          const sub =
            3 - (val.includes('.') ? val.length - val.indexOf('.') : 0)

          return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })
            .format(val)
            .slice(0, sub ? -sub : undefined)
        },
      },
    }
  },
  computed: {
    _current_total_value() {
      return this.calcTotalValue(this.form.payment.separation)
    },
    _false_current_total_value() {
      return this.totalPrice - this._current_total_value
    },
  },
  methods: {
    calcTotalValue(separations) {
      let total = 0
      separations.forEach(separation => {
        if (!separation.value) {
          return
        }

        const value = this.moneyoptions.preProcess(separation.value)
        total += parseFloat(value)
      })

      return total
    },

    handleActionAddPayment() {
      const newPayment = structuredClone(MODEL_PAYMENT)
      newPayment.name = this.form.payment.name
      newPayment.value = this.moneyoptions.postProcess(
        this._false_current_total_value.toString()
      )
      this.form.payment.separation.push(newPayment)

      this.$nextTick(() => {
        this.$refs.payment.validate()
      })
    },

    handleActionCalculateTotal(payment, event) {
      if (!event) {
        return
      }

      const value = parseFloat(this.moneyoptions.preProcess(event))

      if (value > this.totalPrice) {
        payment.value = this.moneyoptions.postProcess(
          (value + this._false_current_total_value).toString()
        )
        return
      }

      if (this._false_current_total_value < 0) {
        payment.value = this.moneyoptions.postProcess(
          (value + this._false_current_total_value).toString()
        )
        return
      }
    },

    handleActionRemovePayment(index) {
      this.form.payment.separation.splice(index, 1)
    },
  },
}
</script>

<template>
  <v-container class="container-payment">
    <v-form ref="payment" v-model="valid" class="payment-form" @submit.prevent>
      <template
        v-for="(payment, index) in form.payment.separation"
        :key="index"
      >
        <div class="payment-item">
          <div class="item-contents">
            <v-text-field
              v-maska:[moneyoptions]
              data-maska="0.99"
              data-maska-tokens="0:\d:multiple|9:\d:optional"
              v-model="payment.value"
              hide-details="auto"
              label="Valor"
              outlined
              dense
              :disabled="is_readonly"
              :rules="rules.value"
              @change="handleActionCalculateTotal(payment, $event)"
            ></v-text-field>

            <v-btn
              v-if="form.payment.separation.length > 1"
              icon="mdi-delete"
              @click="handleActionRemovePayment(index)"
            ></v-btn>
          </div>

          <template v-if="form.payment.separation.length - 1 !== index">
            <v-divider></v-divider>
          </template>
        </div>
      </template>

      <v-row class="footer actions">
        <v-btn
          class="payment-add"
          x-large
          outlined
          elevation="0"
          color="#107a6c"
          width="max-content"
          @click="handleActionAddPayment"
        >
          <v-icon size="1.125rem">mdi-plus</v-icon>
          <span>Adicionar outro Método de Pagamento</span>
        </v-btn>
      </v-row>
    </v-form>
  </v-container>
</template>

<style scoped lang="scss">
.error--text {
  scroll-margin-top: 10px;
}

.container-payment {
  .payment-form,
  .payment-item,
  .item-contents,
  .footer.actions {
    display: flex;
  }

  .payment-form,
  .payment-item {
    flex-direction: column;
  }

  .item-contents,
  .payment-item,
  .payment-form {
    gap: 1rem;
  }

  .footer.actions {
    justify-content: center;
    margin: auto;
  }

  .payment-add {
    text-transform: none;
    border-radius: 0.5rem;

    .v-btn__content {
      gap: 0.5rem;
    }
  }
}
</style>
