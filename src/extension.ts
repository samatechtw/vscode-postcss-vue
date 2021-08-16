import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('postcss-vue is now active!');

	/*
	let disposable = vscode.commands.registerCommand('postcss-vue.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from postcss-vue!');
	});

	context.subscriptions.push(disposable);
	*/
}

export function deactivate() {}
