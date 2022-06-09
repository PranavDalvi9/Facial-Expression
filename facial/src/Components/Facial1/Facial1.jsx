import React from 'react'

export default function Facial1() {
    CY.loader()
   .licenseKey("d668f3b857964b72755513c8bfd9b58e10ce6a216bdc")
   .addModule(CY.modules().FACE_AGE.name)
   .addModule(CY.modules().FACE_GENDER.name)
   .addModule(CY.modules().FACE_EMOTION.name)
   .load()
   .then(({ start, stop }) => start());

   
  return (
    <div>
      
    </div>
  )
}
