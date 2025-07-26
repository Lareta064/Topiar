document.addEventListener("DOMContentLoaded", function () {
   let bodyEl = document.body;
    	/*open mobile menu */
    const menuButton = document.querySelector('#menu-toggle');
    const mobileMenu = document.querySelector('#header-mobile-menu');
    
    menuButton.addEventListener('click', ()=> {
      
      if( menuButton.classList.contains('active')){
        menuButton.classList.remove('active');
        mobileMenu.classList.remove('active');
        bodyEl.classList.remove('lock');
        
      }else{
        menuButton.classList.add('active');
        mobileMenu.classList.add('active');
        bodyEl.classList.add('lock');
      }
    });
  
		/*========CUSTOM SELECT======= */
		const customSelects = document.querySelectorAll('.custom-select');

		customSelects.forEach((customSelect) => {
			const selectTrigger = customSelect.querySelector('.custom-select-trigger');
			const optionsContainer = customSelect.querySelector('.custom-options');
			const optionsList = customSelect.querySelectorAll('.custom-option');

			// Toggle options dropdown
			selectTrigger.addEventListener('click', function (e) {
				e.stopPropagation(); // Останавливаем распространение события
				const isOpen = customSelect.classList.contains('open');
				closeAllSelects();
				if (!isOpen) {
					customSelect.classList.add('open');
					optionsContainer.style.maxHeight = optionsContainer.scrollHeight + 'px';
				} else {
					optionsContainer.style.maxHeight = '0';
				}
			});

			// Update selected option
			optionsList.forEach((option) => {
				option.addEventListener('click', function () {
					selectTrigger.textContent = option.textContent;
					selectTrigger.dataset.value = option.dataset.value;
					customSelect.classList.remove('open');
					optionsContainer.style.maxHeight = '0';
				});
			});
		});

		// Close dropdown if clicked outside
		document.addEventListener('click', function () {
			closeAllSelects();
		});

		function closeAllSelects() {
			customSelects.forEach((select) => {
				select.classList.remove('open');
				const optionsContainer = select.querySelector('.custom-options');
				if (optionsContainer) {
					optionsContainer.style.maxHeight = '0';
				}
			});
		}
    
});


document.addEventListener('DOMContentLoaded', function() {
  const tabsContainers = document.querySelectorAll('.tabs-container');
  
    tabsContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const contents = container.querySelectorAll('.tab-content');
  
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(innerTab => innerTab.classList.remove('active'));
          tab.classList.add('active');
  
          contents.forEach(content => content.classList.remove('active'));
          const activeContent = container.querySelector(tab.getAttribute('data-tab-target'));
  
          // Проверяем, существует ли элемент activeContent перед добавлением класса
          if (activeContent) {
            activeContent.classList.add('active');
          } else {
            console.error('Ошибка: Нет элемента соответствующего data-tab-target:', tab.getAttribute('data-tab-target'));
          }
        });
      });
    });


});

document.addEventListener('DOMContentLoaded', function() {
  
  const acordions = document.querySelectorAll('.acordion');
  if(acordions.length >0){
    acordions.forEach((acor)=>{
      const acorGroups = acor.querySelectorAll('.acordion-group');
        acorGroups.forEach((gr)=>{
          acorItemHeader = gr.querySelector('.acordion-header');
          acorItemHeader.addEventListener('click', ()=>{
            if(gr.classList.contains('active')){
              gr.classList.remove('active');
            }else{
              gr.classList.add('active');
            }
          })
        });
    });
  }
  // 
  const hasHide = document.querySelectorAll('.has-hide');
  if(hasHide.length > 0){
      hasHide.forEach((box)=>{
        const hideCards = box.querySelectorAll('.product-card--hide');
        const showHideBtn = box.querySelector('.show-more-cards');
      
        showHideBtn.addEventListener('click', ()=>{
          if(hideCards.length >0 ){
             hideCards.forEach((crd)=>{
              if(crd.classList.contains('d-none')){
                crd.classList.remove('d-none');
                showHideBtn.textContent="Показать меньше";
              }else{
                crd.classList.add('d-none');
                showHideBtn.textContent="Показать больше";
              }
             })
          }
        });    
      });
  }
  //FOTORAMA
  let mySwiperThumb = new Swiper(".mySwiperThumb", {
    spaceBetween: 20,
    slidesPerView: 'auto',
    freeMode: true,
    watchSlidesProgress: true,
    navigation: {
      nextEl: ".mySwiperThumb-next",
      prevEl: ".mySwiperThumb-prev",
    },
    });
    var mySwiperFotorama = new Swiper(".mySwiperFotorama", {
    spaceBetween: 10,
    speed: 800,
    pagination: {
        el: ".fotorama-swiper-pagination",
        clickable: true,
      },
   
    breakpoints:{
      768:{
        thumbs: {
          swiper:  mySwiperThumb,
       },
       pagination:false,
      }
    }
  });

  Fancybox.bind("[data-fancybox]", {});
   
  
})

