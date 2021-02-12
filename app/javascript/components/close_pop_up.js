// import LocomotiveScroll from 'locomotive-scroll';
import $ from 'jquery'


const closePopUp = () => {
  $('.js-close-btn').click(function() {
    $('.newsletter-modal').hide();
  } )

}


export { closePopUp }
