import { Carousel } from 'react-responsive-carousel';

export default function ReactCarousel() {
  return (

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true} 
          interval={2000} //dwai 2 chrka bjollet 
        //showIndicators={false} //ama ... akana
          showThumbs={false}
          showStatus={false} 
        >
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>

          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>

          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1506152983158-b4a74a01c721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1659095141570-be8b9aff59ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </Carousel>
   
  );
}
 