import '../scss/style.scss'
import {mobileSlider} from './blocks/brandsSwiper';
import {mobileTechniqueSlider} from './blocks/techniqueSwiper';
import { mobilePriceSlider } from './blocks/priceSwiper';
import { setupSidebar } from './blocks/sidebarSetup';
import { setupInfoReadOn } from './blocks/infoReadOnSetup';
import { setupTechniqueShowAll } from './blocks/techniqueShowAll';
import { setupBrandsShowAll } from './blocks/brandsShowAll';
import { setupFeedbackModal } from './blocks/feedbackModal';
import { setupCallModal } from './blocks/callModal';
import { setupBodyLock } from './blocks/bodyLock';


mobileSlider();
mobileTechniqueSlider();
mobilePriceSlider();
setupSidebar();
setupInfoReadOn();
setupBrandsShowAll();
setupTechniqueShowAll();
setupFeedbackModal();
setupCallModal();
setupBodyLock();