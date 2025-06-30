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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios_1 = __importDefault(require("axios"));
const app = (0, express_1.default)();
const PORT = 3000;
// Configuración de CORS
app.use((0, cors_1.default)());
// Middleware para JSON
app.use(express_1.default.json());
// Ruta proxy para redirigir solicitudes
app.use('/api', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const apiUrl = 'https://www.creadors.tv' + req.originalUrl;
    console.log(`Redirigiendo a: ${apiUrl}`); // Verifica la URL en la consola
    try {
        const response = yield (0, axios_1.default)({
            method: req.method,
            url: apiUrl,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Referer': 'https://www.creadors.tv',
            },
            data: req.body,
            maxRedirects: 5, // Permitir hasta 5 redirecciones automáticas
        });
        // Enviar la respuesta recibida desde el servidor remoto
        res.status(response.status).send(response.data);
    }
    catch (error) {
        console.error('Error en el servidor proxy:', error.message);
        res.status(((_a = error.response) === null || _a === void 0 ? void 0 : _a.status) || 500).json({ error: 'Error en el servidor proxy' });
    }
}));
// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor proxy ejecutándose en http://localhost:${PORT}`);
});
