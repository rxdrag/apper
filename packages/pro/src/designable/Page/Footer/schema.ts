import { Schema } from "../schema";

Schema.Footer = {
  type: 'object',
  properties: {
    gridSpan: {
      type: 'number',
      'x-decorator': 'FormItem',
      'x-component': 'NumberPicker',
      'x-component-props': {
        defaultValue: 1,
      },
    },
  },
}
