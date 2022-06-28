---
nav:
  title: 组件
  order: 2
  path: /components
group:
  path: /components/widget
  title: 业务组件
  order: 1
---

## QyIcon

```tsx
import React from 'react';
import { QyIcon, QySpace, message } from 'qy-component';
import copy from 'copy-to-clipboard';
export default () => {
  const iconTypeList = QyIcon.iconTypeList || [];

  const onIconClick = (type) => {
    copy(`<QyIcon icon="${type}" />`);
    alert('组件复制成功');
  };

  return (
    <QySpace>
      {iconTypeList.map((type) => (
        <QyIcon onClick={() => onIconClick(type)} icon={type} />
      ))}
    </QySpace>
  );
};
```
