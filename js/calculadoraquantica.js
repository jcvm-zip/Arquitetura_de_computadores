// Importação da biblioteca Qiskit.js
import * as qiskit from '@qiskit/qiskit.js';

// Criação de circuito quântico e registradores
const qr = qiskit.QuantumRegister(2, 'q');  // dois qubits
const cr = qiskit.ClassicalRegister(2, 'c');  // dois bits clássicos para medir o resultado
const circuit = qiskit.QuantumCircuit(qr, cr);

// Operação de soma quântica
circuit.cx(qr[0], qr[1]);  // porta CNOT com controle em qr[0] e alvo em qr[1]

// Operação de subtração quântica
circuit.x(qr[0]);
circuit.cx(qr[0], qr[1]);
circuit.x(qr[0]);

// Operação de multiplicação quântica
circuit.h(qr[0]);
circuit.h(qr[1]);
circuit.cz(qr[0], qr[1]);
circuit.h(qr[0]);
circuit.h(qr[1]);

// Operação de divisão quântica
circuit.h(qr[0]);
circuit.x(qr[1]);
circuit.cz(qr[0], qr[1]);
circuit.x(qr[1]);
circuit.h(qr[0]);

// Medição dos qubits e armazenamento dos resultados nos bits clássicos
circuit.measure(qr, cr);

// Criação de objeto qiskit.js e conexão ao backend
const backend = new qiskit.BasicAerBackend({backendName: 'qasm_simulator'});
const job = backend.run(circuit);

// Execução do circuito e obtenção dos resultados
job.then((result) => {
  const counts = result.getCounts(circuit);
  console.log(counts);
}).catch((error) => {
  console.error(error);
});
