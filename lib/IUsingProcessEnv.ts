
interface IUsingProcessEnv {
	IS_ON_VERSEL_PRODUCTION: "1" | "0" | undefined;
}

const env = process.env as unknown as IUsingProcessEnv;



export { IUsingProcessEnv, env };