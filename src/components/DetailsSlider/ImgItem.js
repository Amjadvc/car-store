import styles from "./ImgItem.module.css";
function ImgItem({ imgObj, index, handelIndex, sliderIndex }) {
  return (
    <div
      className={`${styles.imgItem} ${index === sliderIndex && styles.active} `}
      onClick={() => handelIndex(index)}
    >
      <img
        src={imgObj.url}
        alt={imgObj.alt}
        className={`${styles.innerImge} `}
      />
    </div>
  );
}

export default ImgItem;
