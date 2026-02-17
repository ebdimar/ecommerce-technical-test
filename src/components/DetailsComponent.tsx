'use client'

import { MobileDetailsApi } from '@/types'
import { useState } from 'react'
import stylesRadioButton from '@/styles/components/RadioButtons.module.css'
import styles from '@/styles/components/Details.module.css'
import { ButtonCustom } from './ButtonCustom'

interface DetailsComponentProps {
  item: MobileDetailsApi
}

export function DetailsComponent({ item }: DetailsComponentProps) {
  const [selectedColorIndex, setSelectedColorIndex] = useState<number | null>(null)
  const [selectedCapacityIndex, setSelectedCapacityIndex] = useState<number | null>(null)

  const canAddToCart = selectedColorIndex !== null && selectedColorIndex !== null

  const currentImage =
    selectedColorIndex !== null ? item.colorOptions[selectedColorIndex] : item.colorOptions[0]

  const currentPrice =
    selectedCapacityIndex !== null
      ? item.storageOptions[selectedCapacityIndex].price
      : item.basePrice

  return (
    <section className={styles.detailsWrapper}>
      <img
        className={styles.detailsImage}
        src={currentImage.imageUrl}
        alt={`${item.name} Color:${currentImage.name}`}
      />
      <div className={styles.detailsInfoWrapper}>
        <div className={styles.detailsInfo}>
          <h2 className={styles.detailsInfoHeader}>{item.name}</h2>
          <p>From {currentPrice} EUR</p>
        </div>

        <fieldset
          className={`${stylesRadioButton.radioButtons} ${stylesRadioButton.capacityPicker}`}
        >
          <legend>STORAGE ¿HOW MUCH SPACE DO YOU NEED?</legend>
          <div>
            {item.storageOptions.map((storage, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name="storage"
                  checked={selectedCapacityIndex === index}
                  onChange={() => setSelectedCapacityIndex(index)}
                />
                {storage.capacity}
              </label>
            ))}
          </div>
        </fieldset>
        <fieldset className={`${stylesRadioButton.radioButtons} ${stylesRadioButton.colorPicker}`}>
          <legend>COLOR. PICK YOUR FAVOURITE.</legend>
          <div>
            {item.colorOptions.map((color, index) => (
              <label key={index}>
                <input
                  aria-label={color.name}
                  type="radio"
                  name="color"
                  checked={selectedColorIndex === index}
                  onChange={() => setSelectedColorIndex(index)}
                />
                <span style={{ backgroundColor: color.hexCode }}></span>
              </label>
            ))}
          </div>
          {selectedColorIndex !== null && <p>{item.colorOptions[selectedColorIndex].name}</p>}
        </fieldset>

        <ButtonCustom disabled={!canAddToCart} className={styles.detailsButton} text={'Añadir'} />
      </div>
    </section>
  )
}
