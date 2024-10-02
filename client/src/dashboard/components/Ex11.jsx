import React, { useState } from 'react';

const Custom = () => {
  const [previews, setPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.readAsDataURL(files[i]);

      reader.onload = (event) => {
        newPreviews.push(event.target.result);
        setPreviews([...newPreviews]);
      };
    }
  };

  return (
    <div className="p-4">
      <input
        type="file"
        name="file"
        multiple
        onChange={handleFileChange}
        className="border p-2 rounded-md shadow-2xl"
      />
      <div className="mt-4 flex flex-wrap gap-3">
        {previews.map((preview, index) => (
          <div key={index} >
            <img src={preview} alt={`Preview ${index}`} className="w-20 h-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Custom;
