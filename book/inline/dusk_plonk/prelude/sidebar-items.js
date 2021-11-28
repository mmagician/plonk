initSidebarItems({"struct":[["BlsScalar","Represents an element of the scalar field $\\mathbb{F}_q$ of the BLS12-381 elliptic curve construction."],["CommitKey","CommitKey is used to commit to a polynomial which is bounded by the max_degree."],["Constraint","Constraint representation containing the coefficients of a polynomial evaluation"],["JubJubAffine","This represents a Jubjub point in the affine `(x, y)` coordinates."],["JubJubExtended","This represents an extended point `(X, Y, Z, T1, T2)` with `Z` nonzero, corresponding to the affine point `(X/Z, Y/Z)`. We always have `T1 * T2 = XY/Z`."],["JubJubScalar","Represents an element of the scalar field $\\mathbb{F}_r$ of the Jubjub elliptic curve construction."],["OpeningKey","Opening Key is used to verify opening proofs made about a committed polynomial."],["Proof","A Proof is a composition of `Commitment`s to the Witness, Permutation, Quotient, Shifted and Opening polynomials as well as the `ProofEvaluations`."],["Prover","Abstraction structure designed to construct a circuit and generate [`Proof`]s for it."],["ProverKey","PLONK circuit Proving Key."],["PublicParameters","The Public Parameters can also be referred to as the Structured Reference String (SRS). It is available to both the prover and verifier and allows the verifier to efficiently verify and make claims about polynomials up to and including a configured degree."],["TurboComposer","The TurboComposer is the circuit-builder tool that the `dusk-plonk` repository provides so that circuit descriptions can be written, stored and transformed into a `Proof` at some point."],["Verifier","Abstraction structure designed verify [`Proof`]s."],["VerifierKey","PLONK circuit Verification Key."],["Witness","Witness data indexed in a `TurboComposer` instance"],["WitnessPoint","Represents a JubJub point in the circuit"]]});