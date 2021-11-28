initSidebarItems({"constant":[["GENERATOR","Generator of the Scalar field"],["ROOT_OF_UNITY","GENERATOR^t where t * 2^s + 1 = q with t odd. In other words, this is a 2^s root of unity."],["TWO_ADACITY","Two adacity"]],"fn":[["multi_miller_loop","Computes $$\\sum_{i=1}^n \\textbf{ML}(a_i, b_i)$$ given a series of terms $$(a_1, b_1), (a_2, b_2), …, (a_n, b_n).$$"],["pairing","Invoke the pairing function without the use of precomputation and other optimizations."]],"mod":[["multiscalar_mul","Multiscalar multiplication implementation using pippenger algorithm."],["notes","Notes about how the BLS12-381 elliptic curve is designed, specified and implemented by this library."]],"struct":[["BlsScalar","Represents an element of the scalar field $\\mathbb{F}_q$ of the BLS12-381 elliptic curve construction."],["G1Affine","This is an element of $\\mathbb{G}_1$ represented in the affine coordinate space. It is ideal to keep elements in this representation to reduce memory usage and improve performance through the use of mixed curve model arithmetic."],["G1Projective","This is an element of $\\mathbb{G}_1$ represented in the projective coordinate space."],["G2Affine","This is an element of $\\mathbb{G}_2$ represented in the affine coordinate space. It is ideal to keep elements in this representation to reduce memory usage and improve performance through the use of mixed curve model arithmetic."],["G2Prepared","This structure contains cached computations pertaining to a $\\mathbb{G}_2$ element as part of the pairing function (specifically, the Miller loop) and so should be computed whenever a $\\mathbb{G}_2$ element is being used in multiple pairings or is otherwise known in advance. This should be used in conjunction with the `multi_miller_loop` function provided by this crate."],["G2Projective","This is an element of $\\mathbb{G}_2$ represented in the projective coordinate space."],["Gt","This is an element of $\\mathbb{G}_T$, the target group of the pairing function. As with $\\mathbb{G}_1$ and $\\mathbb{G}_2$ this group has order $q$."],["MillerLoopResult","Represents results of a Miller loop, one of the most expensive portions of the pairing function. `MillerLoopResult`s cannot be compared with each other until `.final_exponentiation()` is called, which is also expensive."]]});