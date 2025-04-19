function calculatePayroll() {
    const salary = parseFloat(document.getElementById('salaryInput').value);
    if (isNaN(salary) || salary <= 0) {
        alert("Please enter a valid salary amount.");
        return;
    }

    const basic = salary * 0.40;
    const hra = basic * 0.20;
    const pf = basic * 0.12;
    const gross = salary - pf;

    document.getElementById('result').innerHTML = `
        <p><strong>Basic Salary:</strong> ₹${basic.toFixed(2)}</p>
        <p><strong>HRA:</strong> ₹${hra.toFixed(2)}</p>
        <p><strong>Provident Fund (PF):</strong> ₹${pf.toFixed(2)}</p>
        <p><strong>Gross Salary:</strong> ₹${gross.toFixed(2)}</p>
    `;
}