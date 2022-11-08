const crackSafe = (n, k) => {
  // If k and n equal 1 the only combination possible is 0.
  if (n === 1 && k === 1) return '0';

  // visited will keep track of all visited edges.
  const visited = new Set();

  // The De Bruijn Sequence that will be the output of the function.
  const seq = [];

  // To generate a De Bruijn sequence we must traverse every combination of size n
  // containing the number from 0 to k - 1. We will start with the prefix of the
  // combination with all 0s. If n equals 3 and k is greater than 1 our prefix would be
  // 00 and the first combination, our starting edge would be 000.
  const prefix = '0'.repeat(n - 1);

  // We will perform a depth first traveral until we visit every edge (combination)
  // while adding the last element of a combination to the sequence.
  dfs(prefix, seq, visited, k);

  // We append the original prefix to the sequence as the a De Bruijn sequence
  // ends with the first combination. If we reverse the sequence it would still be
  // valid and in that case would start with the first combination instead.
  seq.push(prefix);

  // Join the array to return the sequence as a string.
  return seq.join('');
};

const dfs = (prefix, seq, visited, k) => {
  for (let i = 0; i < k; i++) {
    // Generate a new combination using all the numbers from 0 to k - 1
    // this will give us all the edges that are adjacent to the previous
    // combination.
    const combination = prefix + i.toString();

    // Check if the current combination has been visited we skip it.
    if (visited.has(combination)) continue;

    // If the current combination hasn't been visited add it to the visited set
    // so we do no revisit it.
    visited.add(combination);

    // Create a new prefix using the current combination
    // and continue the depth first traversal.
    dfs(combination.slice(1), seq, visited, k);

    // Add the last element of the visited combination to the sequence.
    seq.push(i);
  }
};



crackSafe(3,3)

//  dfs 1:
//    prefix: '00'
//    combination: '000'
//    passToNext: '00'

// dfs 2:
//    prefix: '00'
//    combination: '000'
//    continue coz visited
//    combination: '001'

// dfs 3:
//    prefix: '01'
//    combination: '010'
//    passToNext: '10'

// dfs 4:
//    prefix: '10'
//    combination: '100'
//    passToNext: '00'

// dfs 5:
//    prefix: '00'
//    combination: '001'
//    continue coz visited
//    combination: '002'
//    passToNext: '02'

// dfs 6:
//    prefix: '02'
//    combination: '020'
//    passToNext: '20'

// dfs 7:
//    prefix: '20'
//    combination: '200'
//    passToNext: '00'

// dfs 8:
//    prefix: '00'
//    combination: '000'
//    continue coz visited
//    combination: '001'
//    continue coz visited
//    combination: '002'
//    seq: [0]

// dfs 7 continued:
//    combination: '201'
//    passToNext: '01'

// dfs 9:
//    prefix: '01'
//    combination: '010'
//    continue coz visited
//    combination: '011'
//    passToNext: '11'

// dfs 10:
//    prefix: '11'
//    combination: '110'
//    passToNext: '10'

// dfs 10:
//    prefix: '10'
//    combination: '100'
//    passToNext: '10'



//  000
//    000
//  001
//    010
//      100
//        000
//      101
//        010
//        011
//          110
//            100
//          111
//            110
//            111
//            112

