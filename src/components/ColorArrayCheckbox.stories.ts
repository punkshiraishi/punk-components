import { ref } from 'vue'
import type { Meta, StoryObj } from '@storybook/vue3'

import ColorArrayCheckbox from './ColorArrayCheckbox.vue'

const meta: Meta<typeof ColorArrayCheckbox> = {
  title: 'ColorArrayCheckbox',
  component: ColorArrayCheckbox,
  render: (args: any) => ({
    components: { ColorArrayCheckbox },
    setup() {
      const items = ref([])
      return { args, items }
    },
    template: `
      <div class="p-3">
        <div class="flex flex-row space-x-3">
          <ColorArrayCheckbox
            v-model="items"
            item="apple"
            label="apple"
          />
          <ColorArrayCheckbox
            v-model="items"
            item="orange"
            label="orange"
          />
          <ColorArrayCheckbox
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
type Story = StoryObj<typeof ColorArrayCheckbox>

export const Basic: Story = {}
