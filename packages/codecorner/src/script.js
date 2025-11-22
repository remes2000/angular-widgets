import { buildWidget as buildWidgetAngular } from './widgets/pie-angular.js';
import { buildWidget as buildWidgetReact } from './widgets/pie-react.js';

buildWidgetAngular(document.querySelector('.angular-pie'));
buildWidgetReact(document.querySelector('.react-pie'));
