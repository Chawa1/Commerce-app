import React, {useState} from 'react';

import Modal from 'react-modal';
import ReactCarousel from './ReactCarousel';


export default function ReactModal() {

    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }


  return (
    
    <div>
    <button onClick={openModal}>Open Modal</button>
    <Modal  //har  shtek lerada bnusit ka opent krd darakawet
//onAfterOpen={()=> alert('my modal just open')}

      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      //style={customStyles}
      contentLabel="Example Modal"

     // style={{overlay: {backgroundColor: 'papayawhip'}, content: {backgroundColor: 'lightsteelblue'} }}
    >
      <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
      <button onClick={closeModal}>close</button>
      <div>I am a modal</div>

{/* <ReactCarousel/> */}

       <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>

<p>You can find more examples in the examples directory, which you can run in a local</p>

      </form> 
    </Modal>
  </div>

  )
}
