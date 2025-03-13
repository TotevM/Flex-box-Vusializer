function setJustifyContent(value) {
    const box = document.getElementById('blackBox');
    box.style.justifyContent = value;
    document.getElementById('justifyContentStatus').textContent = value;
  }
  
  function setAlignItems(value) {
    const box = document.getElementById('blackBox');
    box.style.alignItems = value;
    document.getElementById('alignItemsStatus').textContent = value;
  }
  
  function setFlexDirection(value) {
    const box = document.getElementById('blackBox');
    box.style.flexDirection = value;
    document.getElementById('flexDirectionStatus').textContent = value;
  }
  