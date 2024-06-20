import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { imageText } from "@/scenes/mission/constants"

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const images = require.context('@/assets/problemStatement', true);
const imageList = images.keys().map(image => images(image));

function createImageTiles() {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center">
        {imageList.map((image, index) => (
          <div className="relative rounded overflow-hidden">
            <img className="hover:opacity-75" src={image.default} alt={`image`} />
            <p className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
            {imageText[index]}
            </p>
          </div>
        ))}
      </div>
    );
  };

  const Mission = ({ setSelectedPage }: Props) => {
  return <section id="problemStatement" className="">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Mission)}
    >
        <motion.div
          className="mx-auto w-5/6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="md:w-3/5">
            <h1>Our Mission</h1>
            <p className="py-5">
              Speech Sound Disorders involve Persistent Errors in Articulating certain 
              Speech Sounds. Nearly 1 in 12 children aged 3-17 have Speech Sound Disorders 
              in the US. Dephonia strives to accelerate your child’s speech rehabilitation 
              process through AI-enhanced interactive speech exercises. 
            </p>
            <p>
              Common Difficulties Faced by Our Children Include: 
            </p>
          </div>
          <div>
            {createImageTiles()}
          </div>
          <div>
            <p className="py-5">
              Dephonia is an interactive platform that provides targeted exercises 
              with accurate real-time feedback to supplement your child’s speech 
              rehabilitation progress. 
            </p>
          </div>
        </motion.div>
    </motion.div>
  </section>
}; 

export default Mission;