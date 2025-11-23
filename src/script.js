import { buildWidget as buildWidgetAngular } from './widgets/pie-angular.js';
import { buildWidget as buildWidgetReact } from './widgets/pie-react.js';
import { buildWidget as buildWidgetPreact } from './widgets/pie-preact.js';

buildWidgetAngular(document.querySelector('.angular-pie'));
buildWidgetReact(document.querySelector('.react-pie'));
buildWidgetPreact(document.querySelector('.preact-pie'));