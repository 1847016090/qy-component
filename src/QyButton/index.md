---
nav:
  title: 组件
  order: 2
  path: /components
group:
  path: /components/basic
  title: 基础组件
  order: 1
---

## QyButton

Demo:

```tsx
import React from 'react';
import { QyButton, QyIcon } from 'qy-component';

export default () => {
  const onClick = (e) => console.log(11122211);
  return (
    <QyButton icon={<QyIcon icon="cuowu" />} type="primary" onClick={onClick}>
      旗云Button
    </QyButton>
  );
};
```
