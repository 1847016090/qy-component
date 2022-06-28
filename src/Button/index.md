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

## Button

Demo:

```tsx
import React from 'react';
import { Button } from 'qy-component';

export default () => {
  const onClick = (e) => console.log(11122211);
  return (
    <Button type="primary" onClick={onClick}>
      旗云Button
    </Button>
  );
};
```
