import { Carousel } from 'react-responsive-carousel';

export default function ReactCarousel() {
  return (

        <Carousel
          showArrows={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={2000}
          showIndicators={false}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1527335480088-278dbeec0ad5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1619190324856-af3f6eb55601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1606669027987-0bacdc7a8f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
              src="https://images.unsplash.com/photo-1619190324856-af3f6eb55601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Mnw5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
          <div>
            <img
              alt="item"
              src="https://images.unsplash.com/photo-1606669027987-0bacdc7a8f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3w5NDE1MjA2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            />
          </div>
        </Carousel>
   
  );
}
 