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
      <ColorArrayCheckbox color="#FFD600" v-model="items" :item="1" label="test" />
    `,
  }),
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof ColorArrayCheckbox>

export const Basic: Story = {
  args: {
  },
}
