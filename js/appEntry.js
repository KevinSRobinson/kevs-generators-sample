require('./Client/app.base.js');
require('./Client/app.config.js');


require('./Client/routes');


require('./Client/Features/Home/Components/Main/main');
require('./client/Features/Home/Components/Navigation/mainLayout.js');

require('./Client/Features/Home/routes.js');


require('./Client/Features/Person/routes.js');
require('./Client/Features/Person/Home/peopleHome');
require('./Client/Features/Person/List/peopleList');
require('./Client/Features/Person/Fields/personfields');
require('./Client/Features/Person/Details/personDetails');
require('./Client/Features/Person/PersondataService');
require('./Client/Features/Person/Modals/Services/ServicesController.js');
require('./Client/Features/Person/Modals/CreateUpdate/createUpdatePersonController.js');
require('./Client/Features/Person/Modals/Delete/deletePersonModalController.js');
