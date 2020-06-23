var containsDuplicate = function(nums) {
    // Hash table for o(1) lookup
    values = {}
    // No break in foreach, could get better time by doing whileloop, set i to nums.length() if duplicate -> return true
    bool = null
    
    // iterator
    if (nums.length > 0){
        nums.forEach(num => {
            // Check if value has been seen
            if (values[num] == num) {
                // Set end result to true
                bool = true

            // Has not been seen
            } else {
                // Set as seen
                values[num] = num

                // As long as a num has yet to be marked as a duplicate, set end result to false
                if (bool != true || bool == false) {
                    bool = false
                }
            }
        })
        // End result
        return bool
    }else{
        return false
    }
} 