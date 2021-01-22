const result = document.getElementById("result");
let approval = "Not approved";

// callback
function getApproval(callback) {
	setTimeout(() => {
        approval = "Approved!";
        callback();
	}, 500);
}

getApproval(() => {
    result.textContent = approval;
});

// Promises
function getApproval() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Approved!");
		}, 500);
	});
}

getApproval().then((resolvedApproval) => {
	result.textContent = resolvedApproval;
});

// async/await
function getApproval() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Approved!");
		}, 1000);
	});
}

async function setApprovalText() {
	const approvalPromise = getApproval();
	result.textContent = await approvalPromise;
}

setApprovalText();
