console.log("connected")

// let arr = [1, 2, 3, 4]
// let shape = [2, 2]
// let A = tf.tensor(arr, shape);
// let B = tf.tensor([5, 6, 7, 8],[2, 2]);
// A.print();
// B.print();
// let C = A.matMul(B);
// C.print();

// let inputMatrix = tf.tensor([1, 2],[1, 2])
// inputMatrix.print();

// let inputWeight = tf.tensor([1, 2, 3, 4, 5, 6], [2, 3])
// inputWeight.print();

// let hiddenLayer = inputMatrix.matMul(inputWeight);
// hiddenLayer.print();

// let outputWeight = tf.tensor([1, 2, 3, 4, 5, 6], [3, 2])
// outputWeight.print();

// let outputLayer = hiddenLayer.matMul(outputWeight);
// outputLayer.print();


class NeuralNetwork {
    constructor(input_nodes, hidden_nodes, output_nodes) {
        this.input_nodes = input_nodes;
        this.hidden_nodes = hidden_nodes;
        this.output_nodes = output_nodes;

        // Initialize array
        let input_weights_array = [];
        let output_weights_array = [];
        for (let i = 0 ; i < this.input_nodes * this.hidden_nodes; i ++) {
            input_weights_array.push(Math.random())
        }

        for (let i = 0 ; i < this.hidden_nodes * this.output_nodes; i ++) {
            output_weights_array.push(Math.random())
        }

        this.input_weights = tf.tensor( input_weights_array, [this.input_nodes, this.hidden_nodes]);
        this.output_weights = tf.tensor( output_weights_array, [this.hidden_nodes, this.output_nodes]);

    }

    predict(user_input) {
        let hidden_layer = user_input.matMul(this.input_weights);
        let output_layer = hidden_layer.matMul(this.output_weights);
        return output_layer;

    }

}

for ( let i = 0 ; i < 50; i++ ) {
    let nn = new NeuralNetwork(2, 3, 2);
    let result = nn.predict(tf.tensor([0, 1], [1, 2]))
    result.print();
}
