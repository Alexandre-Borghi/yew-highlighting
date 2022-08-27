import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	console.log("Extension active");

	let disposable = vscode.commands.registerCommand("yew-highlighting.helloWorld", () => {
		vscode.window.showInformationMessage("Ready for some clean syntax highlighting?");
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	console.log("Extension deactivated");
}
