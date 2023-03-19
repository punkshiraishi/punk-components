import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'

import ArrayCheckableLabel from './ArrayCheckableLabel.vue'

const meta: Meta<typeof ArrayCheckableLabel> = {
  title: 'ArrayCheckableLabel',
  component: ArrayCheckableLabel,
  render: (args: any) => ({
    components: { ArrayCheckableLabel },
    setup() {
      const items = ref([])
      return { args, items }
    },
    template: `
      <div class="p-3">
        <div class="flex flex-row space-x-3">
          <ArrayCheckableLabel
            v-model="items"
            item="apple"
            label="apple"
          />
          <ArrayCheckableLabel
            v-model="items"
            item="orange"
            label="orange"
          />
          <ArrayCheckableLabel
            v-model="items"
            item="banana"
            label="banana"
          />
        </div>
        {{ items }}
      </div>
    `,
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ArrayCheckableLabel>

export const Basic: Story = {}
