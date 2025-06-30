"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
function testRequest() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Realizar una solicitud GET a https://www.creadors.tv/api/categories
            const response = yield axios_1.default.get('https://www.creadors.tv/api/categories', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Referer': 'https://www.creadors.tv',
                },
            });
            // Imprimir la respuesta en caso de éxito
            console.log('Respuesta exitosa:', response.data);
        }
        catch (error) {
            // Si hay un error, imprime el código de estado y el mensaje de error
            console.error('Error en la solicitud:');
            console.error('Código de estado:', error.response ? error.response.status : 'Sin respuesta');
            console.error('Mensaje:', error.message);
        }
    });
}
// Llamar a la función para ejecutar la solicitud
testRequest();
