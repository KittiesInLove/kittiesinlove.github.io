window.onload = () => {
  const approveTabBtn = document.querySelector('#approve-tab');
  const breedTabBtn = document.querySelector('#breed-tab');
  const breedContainer = document.querySelector('.breed-kitties-container');
  const approveContainer = document.querySelector('.approve-siring-container');
  const approveHeader = document.querySelector('#approve-header');
  const banner = document.querySelector('.banner');

  const initApproveDisplay = () => {
    approveTabBtn.style.borderBottom = "2px solid white";
    approveTabBtn.style.color = "white";
    breedTabBtn.style.borderBottom = "none";
    breedTabBtn.style.color = "palevioletred";
    breedContainer.style.display = 'none';
    approveContainer.style.display = 'block';
    banner.style.background = 'rgba(10, 75, 115, 0.3)';
    approveHeader.style.display = 'inline-block';
  }

  const initBreedDisplay = () => {
    breedTabBtn.style.borderBottom = "2px solid white";
    breedTabBtn.style.color = "white";
    approveTabBtn.style.borderBottom = "none";
    approveTabBtn.style.color = "palevioletred";
    breedContainer.style.display = 'block';
    approveContainer.style.display = 'none';
    banner.style.background = 'rgba(211, 80, 115, 0.3)';
    approveHeader.style.display = 'none';
  }

  initApproveDisplay();

  approveTabBtn.addEventListener('click', () => initApproveDisplay());
  breedTabBtn.addEventListener('click', () => initBreedDisplay());
};