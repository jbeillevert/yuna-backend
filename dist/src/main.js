"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const passport = require("passport");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const port = process.env.SERVOR_PORT;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.use(passport.initialize());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map