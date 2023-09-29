import { motion, AnimatePresence } from 'framer-motion';
import state from '../store';
import { useSnapshot } from 'valtio';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/config/motion';

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
          <motion.header>
            <img src='./threejs.png' alt='logo' className='w-8 h-8 object-contain' />
          </motion.header>
        </motion.section>
      )}

    </AnimatePresence>
  )
}

export default Home