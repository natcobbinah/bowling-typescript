export class Bowling {

    generate_bowling_score_for_complete_strikes_game(bowling_sequence: string): number {
        //split string into array
        let bowling_sequence_array:Array<string> = bowling_sequence.split(" ");

        //define two pointers
        let startpointer:number = 1;
        let nextpointer:number = 2;

        //define loop index
        let startloopIndex:number = 1;

        //define bowling score counter
        let bowling_score_counter:number = 0;

        while(startloopIndex <= bowling_sequence_array.length){
            if(bowling_sequence_array[startpointer] === "X"  && 
                bowling_sequence_array[nextpointer] === "X" && 
                bowling_sequence_array[nextpointer + 1]
            ){
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
}