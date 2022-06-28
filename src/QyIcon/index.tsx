import React from 'react';
import iconClassData from '../../public/icon/iconfont.json';
import cls from 'classnames';
import styles from './index.less';
const iconTypeList = iconClassData.glyphs.map((i) => i.font_class);
// console.log('iconTypeList', iconTypeList)
// type IconTypes = typeof iconTypeList

interface QyIconProps {
  /** @name 图标的icon_class */
  icon: string;
  /** @name 类样式 */
  className?: string;
  /** @name 点击事件 */
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

/** @name 旗云Icon组件 */
const QyIcon = (props: QyIconProps) => {
  const { icon = '', className = '', onClick = () => {} } = props;

  const customCls = cls('qyicon', styles.icon, className);

  return (
    <svg className={customCls} onClick={onClick} aria-hidden="true">
      <use xlinkHref={`#icon-${icon}`}></use>
    </svg>
  );
};

QyIcon.iconTypeList = iconTypeList;

export default QyIcon;
