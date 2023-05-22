import swaggerJSDoc from 'swagger-jsdoc';
import  SwaggerUi from 'swagger-ui-express';
import express,{Application,Request,Response } from 'express';
import { swaggerSpec } from './swagger.config';

/**
 * Clase Principal de la api, Se definen las rutas de la Api
 * 
 * @author JFDWHITE13
 * @description Clase inicial de la api donde se manejan las rutas
 */

class App{
	public app:Application;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	private server:any;

	constructor(){
		this.app=express();
		this.app.use(express.json());
		this.app.use('/api-docs',SwaggerUi.serve,SwaggerUi.setup(swaggerSpec));
		this.Routes();
	}

	private Routes():void{
		this.app.get(
			'/',
			(req:Request,res:Response)=>{
				res.send('Bienvenido a la API de prueba');
			}
		);
	}

	public start():void{
		const port = 3004;
		this.server= this.app.listen(
			port,
			()=>{console.log(`Server started in port ${port}`);
			}
		);
	}

	public close():void{
		this.server.close();
	}
}

export default App;