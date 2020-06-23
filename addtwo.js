var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var pointer = List;
    var sum = 0;
    var carry = 0;
    
    // Only run when there is a current node && sum is not negative
    while(l1!==null||l2!==null||sum>0){
        
        // Check if l1 is not null
        if(l1!==null){
            
            // Add to sum 
            sum = sum + l1.val;
            l1 = l1.next;
        }
        
        // Check if l1 is not null
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            // Carry to prevent numbers over or equal to 10
            carry++;
            sum = sum - 10;
        }

        // Keep loop running, pointer directed to new node === sum
        pointer.next = new ListNode(sum);
        pointer = pointer.next;
        
        // Track amount of times over 10, sum carries it to next node
        sum = carry;
        // Reset carry
        carry = 0;

    }
    
    // First element is always 0
    return List.next;
};