import classNames from 'classnames'
import React from 'react'
import styles from './style.module.scss'

const AppButton = ({
  height,
  width,
  minWidth,
  padding,
  backgroundColor,
  color,
  borderRadius,
  fontSize,
  title,
  src = null,
  imgWidth,
  margin,
  onClick,
  className,
  hrefLink
}) => {
  return (
    <div>
         <a className={styles.buttonHref} href={hrefLink}>
    <div
      onClick={onClick}
      style={{
        height,
        width,
        backgroundColor,
        borderRadius,
        margin,
        padding,
        color,
        fontSize,
        minWidth
      }}
      className={classNames(styles.icon_bttn, className)}
    >
      <p
        style={{ color, fontSize }}
        className={styles.icon_bttn_p}
        >
        {title}
      </p>
        {src && <img width={imgWidth} src={src} />}
    </div>
    </a>
    </div>
  )
}

export default AppButton;