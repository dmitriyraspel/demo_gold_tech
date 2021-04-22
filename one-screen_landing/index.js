function fixNav() {
   var body = document.body;
   var menuButton1 = document.querySelector('#menu__link-1');
   var menuButton2 = document.querySelector('#menu__link-2');
   var menuButton3 = document.querySelector('#menu__link-3');
   var menuButton4 = document.querySelector('#menu__link-4');
   var menuButton5 = document.querySelector('#menu__link-5');

   var menuLinks = document.querySelectorAll('a.menu__link');
   var logo = document.querySelector('a.logo-link');
   
   var activ = '-activ';


   if (menuLinks.length > 0) {
      menuLinks.forEach(menuLink => {
         menuLink.addEventListener("click", MenuLinkClick);
      });
   }

   function MenuLinkClick() {
      var sectionNum = this.getAttribute('aria-controls');
      var newClass = sectionNum + activ;
      
      if ( this.getAttribute( 'aria-expanded' ) === 'true' ) {
         removeActiv();
         this.setAttribute( 'aria-expanded', 'false' );
         this.classList.remove( 'active-button' );
         returnHomeClass();
      } else {
         removeActiv();
         this.setAttribute( 'aria-expanded', 'true' );
         this.classList.add( 'active-button' );
         body.classList.add(newClass); 
         returnHomeClass();
      }
   }


   function removeActiv() {

      if (body.classList.contains('section-home-activ') ) {
         body.classList.remove('section-home-activ');
      };
         
      
      if (body.classList.contains('section-1-activ') ) {
         body.classList.remove('section-1-activ');
         menuButton1.setAttribute( 'aria-expanded', 'false' );
      };
      if (body.classList.contains('section-2-activ') ) {
         body.classList.remove('section-2-activ');
         menuButton2.setAttribute( 'aria-expanded', 'false' );
      };
      if (body.classList.contains('section-3-activ') ) {
         body.classList.remove('section-3-activ');
         menuButton3.setAttribute( 'aria-expanded', 'false' );
      };
      if (body.classList.contains('section-4-activ') ) {
         body.classList.remove('section-4-activ');
         menuButton4.setAttribute( 'aria-expanded', 'false' );
      };
      if (body.classList.contains('section-5-activ') ) {
         body.classList.remove('section-5-activ');
         menuButton5.setAttribute( 'aria-expanded', 'false' );
      }
   }

   function returnHomeClass() {
      if ( menuButton1.getAttribute( 'aria-expanded' ) === 'false'
      & menuButton2.getAttribute( 'aria-expanded' ) === 'false'
      & menuButton3.getAttribute( 'aria-expanded' ) === 'false'
      & menuButton4.getAttribute( 'aria-expanded' ) === 'false'
      & menuButton5.getAttribute( 'aria-expanded' ) === 'false'
      ) {

         body.classList.add('section-home-activ');
      }
   }
   
   logo.addEventListener('click', returnHomePage);
   // logo.addEventListener("click", returnHomePage);
   function returnHomePage() {
      if (! body.classList.contains('section-home-activ') ) {
         removeActiv();
         returnHomeClass();
      }
   }

}

fixNav();