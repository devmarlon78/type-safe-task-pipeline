export type TaskStatus = 'PENDING' | 'RUNNING' | 'SUCCESS' | 'FAILED';

export type TaskHandler<TInput, TOutput> = (
	input: TInput
) => TOutput | Promise<TOutput>;

export interface TaskDefinition<TInput = unknown, IOutput = unknown> { 
	name: string;
	handler: TaskHandler<TInput, IOutput>;
};

export type TaskMap = Record<string , {
	input: any;
	output: any;
}>;

export interface TaskExecutionResult<TOutput> {
	status: TaskStatus;
	data?: TOutput;
	error?: Error;
	durationMs: number;
};