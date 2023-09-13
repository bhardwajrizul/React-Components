import { useState } from "react";

import Modal from "../components/Modal"
import Button from "../components/Button";


function ModalPage() {
    const [showModal, setShowModal] = useState(false);
    
    const handleClick = () => {
        setShowModal(true);
    }

    const handleClose = () => {
        setShowModal(false);
    }
    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is something important you need to consider!
        </p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus id lectus nec facilisis. Vivamus at dapibus erat, fringilla rutrum enim. Pellentesque hendrerit ipsum eget dui iaculis, ac efficitur urna malesuada. Suspendisse auctor, dolor et volutpat sollicitudin, sapien nunc bibendum libero, sed interdum purus tortor vitae elit. Mauris hendrerit lacus id dapibus pellentesque. Nunc scelerisque ullamcorper ex et iaculis. Nunc efficitur nisi ut sem tempor, sed lacinia tellus dapibus. Nulla facilisi. Curabitur sed est ut tellus convallis aliquet id eu odio. Cras lacinia, tellus ac varius consequat, tellus sapien vulputate urna, sed ullamcorper orci lorem eget nisi. Ut velit ante, cursus quis ex nec, vestibulum dapibus dolor. Donec convallis fringilla sollicitudin. Cras facilisis, sem et rhoncus feugiat, tortor urna mattis orci, sed pharetra ipsum mi sed metus. Phasellus fringilla consectetur risus. In ligula quam, malesuada ac condimentum id, hendrerit eget justo. Fusce ut lobortis sem. 
            </p>
        </div>
    );
}

export default ModalPage;