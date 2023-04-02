import AccountablePayment from '@/components/AccountablePayment/AccountablePayment.vue'

export default {
  title: 'Design System/AccountablePayment',
  component: AccountablePayment,
  parameters: {
    layout: 'fullscreen',
  },
}

const AccountablePaymentTemplate = {
  render: args => ({
    components: { AccountablePayment },
    setup() {
      return { args }
    },
    template: '<AccountablePayment v-bind="args" />',
  }),
}

export const Primary = {
  ...AccountablePaymentTemplate,
  args: {
    totalPrice: 100,
  },
}
