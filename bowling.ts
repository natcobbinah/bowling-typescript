export class Bowling {
    
    generate_bowling_score_for_complete_strikes_game(bowling_sequence: string): number {
        //split string into array
        let bowling_sequence_array: Array<string> = bowling_sequence.split(" ");

        //define two pointers
        let startpointer: number = 1;
        let nextpointer: number = 2;

        //define loop index
        let startloopIndex: number = 1;

        //define bowling score counter
        let bowling_score_counter: number = 0;

        while (startloopIndex <= bowling_sequence_array.length) {
            if (bowling_sequence_array[startpointer] === "X" &&
                startpointer <= 10 &&
                bowling_sequence_array[nextpointer] === "X" &&
                bowling_sequence_array[nextpointer + 1]
            ) {
                bowling_score_counter += 30;
            }

            //increment loop index
            startloopIndex += 1;

            //increment pointers
            startpointer = startloopIndex;
            nextpointer = startloopIndex;
        }

        return bowling_score_counter;
    }

    generate_bowling_score_for_points_and_misses(bowling_sequence: string): number {

        //get bowling sequence length
        let bowling_sequence_length = bowling_sequence.length;

        //define bowling score counter
        let bowling_score_result: number = 0;

        let loopIndex = 0;
        let bowling_sequence_array: string[] = []

        while (loopIndex < bowling_sequence_length) {
            if (bowling_sequence.at(loopIndex) !== '-') {
                bowling_sequence_array.push(bowling_sequence.charAt(loopIndex))
            }
            loopIndex = loopIndex + 1;
        }


        //get all numbers in array and sum only the first 10 digits
        let total_required_sequences: string[] = [];

        for (let i = 0; i < bowling_sequence_array.length; i++) {
            if (bowling_sequence_array[i] !== " ") {
                total_required_sequences.push(bowling_sequence_array[i])
            }
        }

        //sum only first 10 numbers in total_required_sequences
        for (let i = 0; i < 10; i++) {
            bowling_score_result += parseInt(total_required_sequences[i]);
        }


        return bowling_score_result;
    }

    generate_bowling_score_for_pairs_and_spare_with_final(bowling_sequence: string): number {
        //get bowling sequence length
        let bowling_sequence_length = bowling_sequence.length;

        //define bowling score counter
        let bowling_score_result: number = 0;

        let loopIndex = 0;
        let bowling_sequence_array: string[] = []

        while (loopIndex < bowling_sequence_length) {
            if (bowling_sequence.at(loopIndex) !== '/') {
                bowling_sequence_array.push(bowling_sequence.charAt(loopIndex))
            }
            loopIndex = loopIndex + 1;
        }


        //get all numbers in array and sum only the first 10 digits
        let total_required_sequences: string[] = [];

        for (let i = 0; i < bowling_sequence_array.length; i++) {
            if (bowling_sequence_array[i] !== " ") {
                total_required_sequences.push(bowling_sequence_array[i])
            }
        }

        let final_point = parseInt(total_required_sequences[total_required_sequences
            .length - 1
        ], 10);

        //only first 10 digits are accounted for
        for (let i = 0; i < 10; i++) {
            bowling_score_result += 1;
        }

        bowling_score_result = (bowling_score_result + final_point) * 10; 

        return bowling_score_result 
    }
}