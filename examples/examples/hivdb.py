from typegraph.graphs.typegraph import TypeGraph
from typegraph.importers.graphql import import_graphql
from typegraph.materializers.graphql import GraphQLRuntime
from typegraph.types import types as t

import_graphql("https://hivdb.stanford.edu/graphql", False)

with TypeGraph(name="hivdb") as g:
    remote = GraphQLRuntime("https://hivdb.stanford.edu/graphql")
    t.string().named("ASIAlgorithm")  # kind: ENUM
    t.struct(
        {
            "drugClass": t.optional(g("DrugClass")),
            "drugScores": t.optional(t.array(g("ComparableDrugScore"))),
        }
    ).named(
        "AlgorithmComparison"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "firstAA": t.optional(t.integer()),
            "lastAA": t.optional(t.integer()),
            "firstNA": t.optional(t.integer()),
            "lastNA": t.optional(t.integer()),
            "matchPcnt": t.optional(t.float()),
            "size": t.optional(t.integer()),
            "prettyPairwise": t.optional(g("PrettyPairwise")),
            "alignedNAs": t.optional(t.string()),
            "alignedAAs": t.optional(t.string()),
            "adjustedAlignedNAs": t.optional(t.string()),
            "adjustedAlignedAAs": t.optional(t.string()),
            "mutations": t.optional(t.array(g("Mutation"))),
            "frameShifts": t.optional(t.array(g("FrameShift"))),
        }
    ).named(
        "AlignedGeneSequence"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "gene": t.optional(g("Gene")),
            "drugClass": t.optional(g("DrugClass")),
            "type": t.optional(t.string()),
            "text": t.optional(t.string()),
            "triggeredAAs": t.optional(t.string()),
            "boundMutation": t.optional(g("Mutation")),
            "highlightText": t.optional(t.array(t.string())),
        }
    ).named(
        "BoundMutationComment"
    )  # kind: OBJECT
    t.struct(
        {
            "boundMutation": t.optional(g("Mutation")),
            "matched": t.optional(t.array(g("MutationPrevalenceByAA"))),
            "others": t.optional(t.array(g("MutationPrevalenceByAA"))),
        }
    ).named(
        "BoundMutationPrevalence"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "distancePcnt": t.optional(t.float()),
            "display": t.optional(t.string()),
        }
    ).named(
        "BoundSubtype"
    )  # kind: OBJECT
    t.string().named("CommentType")  # kind: ENUM
    t.struct(
        {
            "mutationType": t.optional(t.string()),
            "commentType": t.optional(t.string()),
            "comments": t.optional(t.array(g("BoundMutationComment"))),
        }
    ).named(
        "CommentsByType"
    )  # kind: OBJECT
    t.struct(
        {
            "drug": t.optional(g("Drug")),
            "algorithm": t.optional(t.string()),
            "SIR": t.optional(t.string()),
            "interpretation": t.optional(t.string()),
            "explanation": t.optional(t.string()),
        }
    ).named(
        "ComparableDrugScore"
    )  # kind: OBJECT
    t.struct({"name": t.optional(t.string()), "xml": t.optional(t.string()),}).named(
        "CustomASIAlgorithm"
    )  # kind: INPUT_OBJECT
    t.struct(
        {
            "mean": t.optional(t.float()),
            "standardDeviation": t.optional(t.float()),
            "min": t.optional(t.float()),
            "max": t.optional(t.float()),
            "n": t.optional(t.float()),
            "sum": t.optional(t.float()),
            "values": t.optional(t.array(t.float())),
            "percentile": t.optional(t.float()),
        }
    ).named(
        "DescriptiveStatistics"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "displayAbbr": t.optional(t.string()),
            "fullName": t.optional(t.string()),
            "drugClass": t.optional(g("DrugClass")),
        }
    ).named(
        "Drug"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "fullName": t.optional(t.string()),
            "drugs": t.optional(t.array(g("Drug"))),
            "gene": t.optional(g("Gene")),
        }
    ).named(
        "DrugClass"
    )  # kind: OBJECT
    t.string().named("DrugClassEnum")  # kind: ENUM
    t.string().named("DrugEnum")  # kind: ENUM
    t.struct(
        {
            "mutations": t.optional(t.array(g("Mutation"))),
            "score": t.optional(t.float()),
        }
    ).named(
        "DrugPartialScore"
    )  # kind: OBJECT
    t.struct(
        {
            "version": t.optional(g("DrugResistanceAlgorithm")),
            "algorithm": t.optional(g("DrugResistanceAlgorithm")),
            "gene": t.optional(g("Gene")),
            "drugScores": t.optional(t.array(g("DrugScore"))),
            "mutationsByTypes": t.optional(t.array(g("MutationsByType"))),
            "commentsByTypes": t.optional(t.array(g("CommentsByType"))),
        }
    ).named(
        "DrugResistance"
    )  # kind: OBJECT
    t.struct(
        {
            "text": t.optional(t.string()),
            "display": t.optional(t.string()),
            "family": t.optional(t.string()),
            "version": t.optional(t.string()),
            "strain": t.optional(g("Strain")),
            "publishDate": t.optional(t.string()),
        }
    ).named(
        "DrugResistanceAlgorithm"
    )  # kind: OBJECT
    t.struct(
        {
            "drugClass": t.optional(g("DrugClass")),
            "drug": t.optional(g("Drug")),
            "SIR": t.optional(t.string()),
            "score": t.optional(t.float()),
            "level": t.optional(t.integer()),
            "text": t.optional(t.string()),
            "partialScores": t.optional(t.array(g("DrugPartialScore"))),
        }
    ).named(
        "DrugScore"
    )  # kind: OBJECT
    t.string().named("EnumGene")  # kind: ENUM
    t.string().named("EnumSequenceReadsHistogramAggregatesOption")  # kind: ENUM
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "position": t.optional(t.integer()),
            "isInsertion": t.optional(t.boolean()),
            "isDeletion": t.optional(t.boolean()),
            "size": t.optional(t.integer()),
            "NAs": t.optional(t.string()),
            "text": t.optional(t.string()),
        }
    ).named(
        "FrameShift"
    )  # kind: OBJECT
    t.struct(
        {
            "nameWithStrain": t.optional(t.string()),
            "name": t.optional(t.string()),
            "strain": t.optional(g("Strain")),
            "refSequence": t.optional(t.string()),
            "reference": t.optional(t.string()),
            "consensus": t.optional(t.string()),
            "length": t.optional(t.integer()),
            "drugClasses": t.optional(t.array(g("DrugClass"))),
            "mutationTypes": t.optional(t.array(t.string())),
        }
    ).named(
        "Gene"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "firstAA": t.optional(t.integer()),
            "lastAA": t.optional(t.integer()),
            "allPositionCodonReads": t.optional(t.array(g("PositionCodonReads"))),
            "internalJsonAllPositionCodonReads": t.optional(t.string()),
            "size": t.optional(t.integer()),
            "numPositions": t.optional(t.integer()),
            "readDepthStats": t.optional(g("DescriptiveStatistics")),
            "alignedNAs": t.optional(t.string()),
            "alignedAAs": t.optional(t.string()),
            "mutations": t.optional(t.array(g("Mutation"))),
            "histogram": t.optional(g("SequenceReadsHistogram")),
        }
    ).named(
        "GeneSequenceReads"
    )  # kind: OBJECT
    t.struct(
        {
            "display": t.optional(t.string()),
            "displayWithoutDistance": t.optional(t.string()),
            "subtype": t.optional(g("HIVSubtype")),
            "genotype": t.optional(g("HIVSubtype")),
            "displaySubtypes": t.optional(t.array(g("HIVSubtype"))),
            "displayGenotypes": t.optional(t.array(g("HIVSubtype"))),
            "firstNA": t.optional(t.integer()),
            "lastNA": t.optional(t.integer()),
            "distance": t.optional(t.float()),
            "distancePcnt": t.optional(t.string()),
            "referenceAccession": t.optional(t.string()),
            "referenceCountry": t.optional(t.string()),
            "referenceYear": t.optional(t.integer()),
            "discordanceList": t.optional(t.array(t.integer())),
        }
    ).named(
        "HIVBoundSubtype"
    )  # kind: OBJECT
    t.string().named("HIVClassificationLevel")  # kind: ENUM
    t.struct(
        {
            "indexName": t.optional(t.string()),
            "displayName": t.optional(t.string()),
            "classificationLevel": t.optional(t.string()),
        }
    ).named(
        "HIVSubtype"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "reference": t.optional(t.string()),
            "consensus": t.optional(t.string()),
            "position": t.optional(t.integer()),
            "displayAAs": t.optional(t.string()),
            "AAs": t.optional(t.string()),
            "displayAAChars": t.optional(t.array(t.string())),
            "AAChars": t.optional(t.array(t.string())),
            "triplet": t.optional(t.string()),
            "insertedNAs": t.optional(t.string()),
            "isInsertion": t.optional(t.boolean()),
            "isDeletion": t.optional(t.boolean()),
            "isIndel": t.optional(t.boolean()),
            "isAmbiguous": t.optional(t.boolean()),
            "isApobecMutation": t.optional(t.boolean()),
            "isApobecDRM": t.optional(t.boolean()),
            "isUnsequenced": t.optional(t.boolean()),
            "isDRM": t.optional(t.boolean()),
            "hasStop": t.optional(t.boolean()),
            "isUnusual": t.optional(t.boolean()),
            "isSDRM": t.optional(t.boolean()),
            "types": t.optional(t.array(t.string())),
            "primaryType": t.optional(t.string()),
            "comments": t.optional(t.array(g("BoundMutationComment"))),
            "text": t.optional(t.string()),
            "shortText": t.optional(t.string()),
        }
    ).named(
        "Mutation"
    )  # kind: OBJECT
    t.struct(
        {
            "AA": t.optional(t.string()),
            "subtype": t.optional(g("MutationPrevalenceSubtype")),
            "totalNaive": t.optional(t.integer()),
            "frequencyNaive": t.optional(t.integer()),
            "percentageNaive": t.optional(t.float()),
            "totalTreated": t.optional(t.integer()),
            "frequencyTreated": t.optional(t.integer()),
            "percentageTreated": t.optional(t.float()),
        }
    ).named(
        "MutationPrevalence"
    )  # kind: OBJECT
    t.struct(
        {
            "AA": t.optional(t.string()),
            "subtypes": t.optional(t.array(g("MutationPrevalence"))),
        }
    ).named(
        "MutationPrevalenceByAA"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "stats": t.optional(t.array(g("MutationPrevalenceSubtypeStat"))),
        }
    ).named(
        "MutationPrevalenceSubtype"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "totalNaive": t.optional(t.integer()),
            "totalTreated": t.optional(t.integer()),
        }
    ).named(
        "MutationPrevalenceSubtypeStat"
    )  # kind: OBJECT
    t.string().named("MutationSetFilterOption")  # kind: ENUM
    t.string().named("MutationType")  # kind: ENUM
    t.struct(
        {
            "name": t.optional(t.string()),
            "validationResults": t.optional(t.array(g("ValidationResult"))),
            "drugResistance": t.optional(t.array(g("DrugResistance"))),
            "mutationPrevalences": t.optional(t.array(g("BoundMutationPrevalence"))),
            "algorithmComparison": t.optional(t.array(g("AlgorithmComparison"))),
        }
    ).named(
        "MutationsAnalysis"
    )  # kind: OBJECT
    t.struct(
        {
            "mutationType": t.optional(t.string()),
            "mutations": t.optional(t.array(g("Mutation"))),
        }
    ).named(
        "MutationsByType"
    )  # kind: OBJECT
    t.struct(
        {
            "codon": t.optional(t.string()),
            "reads": t.optional(t.integer()),
            "refAminoAcid": t.optional(t.string()),
            "aminoAcid": t.optional(t.string()),
            "proportion": t.optional(t.float()),
            "codonPercent": t.optional(t.float()),
            "aaPercent": t.optional(t.float()),
            "isReference": t.optional(t.boolean()),
            "isDRM": t.optional(t.boolean()),
            "isUnusual": t.optional(t.boolean()),
            "isApobecMutation": t.optional(t.boolean()),
            "isApobecDRM": t.optional(t.boolean()),
        }
    ).named(
        "OneCodonReads"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "position": t.optional(t.integer()),
            "totalReads": t.optional(t.integer()),
            "isTrimmed": t.optional(t.boolean()),
        }
    ).named(
        "OneCodonReadsCoverage"
    )  # kind: OBJECT
    t.struct(
        {
            "codon": t.optional(t.string()),
            "reads": t.optional(t.integer()),
        }
    ).named(
        "OneCodonReadsInput"
    )  # kind: INPUT_OBJECT
    t.struct(
        {
            "gene": t.optional(g("Gene")),
            "position": t.optional(t.integer()),
            "totalReads": t.optional(t.integer()),
            "codonReads": t.optional(t.array(g("OneCodonReads"))),
        }
    ).named(
        "PositionCodonReads"
    )  # kind: OBJECT
    t.struct(
        {
            "gene": t.optional(t.string()),
            "position": t.optional(t.integer()),
            "totalReads": t.optional(t.integer()),
            "allCodonReads": t.optional(t.array(g("OneCodonReadsInput"))),
        }
    ).named(
        "PositionCodonReadsInput"
    )  # kind: INPUT_OBJECT
    t.struct(
        {
            "positionLine": t.optional(t.array(t.string())),
            "refAALine": t.optional(t.array(t.string())),
            "alignedNAsLine": t.optional(t.array(t.string())),
            "mutationLine": t.optional(t.array(t.string())),
        }
    ).named(
        "PrettyPairwise"
    )  # kind: OBJECT
    t.string().named("SIR")  # kind: ENUM
    t.struct(
        {
            "inputSequence": t.optional(g("UnalignedSequenceOutput")),
            "strain": t.optional(g("Strain")),
            "isReverseComplement": t.optional(t.boolean()),
            "availableGenes": t.optional(t.array(g("Gene"))),
            "validationResults": t.optional(t.array(g("ValidationResult"))),
            "alignedGeneSequences": t.optional(t.array(g("AlignedGeneSequence"))),
            "subtypesV2": t.optional(t.array(g("HIVBoundSubtype"))),
            "bestMatchingSubtype": t.optional(g("HIVBoundSubtype")),
            "genotypes": t.optional(t.array(g("HIVBoundSubtype"))),
            "bestMatchingGenotype": t.optional(g("HIVBoundSubtype")),
            "mixturePcnt": t.optional(t.float()),
            "mutations": t.optional(t.array(g("Mutation"))),
            "frameShifts": t.optional(t.array(g("FrameShift"))),
            "drugResistance": t.optional(t.array(g("DrugResistance"))),
            "mutationPrevalences": t.optional(t.array(g("BoundMutationPrevalence"))),
            "subtypes": t.optional(t.array(g("BoundSubtype"))),
            "subtypeText": t.optional(t.string()),
            "algorithmComparison": t.optional(t.array(g("AlgorithmComparison"))),
        }
    ).named(
        "SequenceAnalysis"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "strain": t.optional(g("Strain")),
            "cutoffSuggestionLooserLimit": t.optional(t.float()),
            "cutoffSuggestionStricterLimit": t.optional(t.float()),
            "validationResults": t.optional(t.array(g("ValidationResult"))),
            "minPrevalence": t.optional(t.float()),
            "minCodonCount": t.optional(t.integer()),
            "minReadDepth": t.optional(t.integer()),
            "availableGenes": t.optional(t.array(g("Gene"))),
            "allGeneSequenceReads": t.optional(t.array(g("GeneSequenceReads"))),
            "subtypes": t.optional(t.array(g("HIVBoundSubtype"))),
            "bestMatchingSubtype": t.optional(g("HIVBoundSubtype")),
            "mixturePcnt": t.optional(t.float()),
            "mutations": t.optional(t.array(g("Mutation"))),
            "drugResistance": t.optional(t.array(g("DrugResistance"))),
            "histogram": t.optional(g("SequenceReadsHistogram")),
            "histogramByCodonCount": t.optional(
                g("SequenceReadsHistogramByCodonCount")
            ),
            "readDepthStats": t.optional(g("DescriptiveStatistics")),
            "readDepthStatsDRP": t.optional(g("DescriptiveStatistics")),
            "codonReadsCoverage": t.optional(t.array(g("OneCodonReadsCoverage"))),
            "internalJsonCodonReadsCoverage": t.optional(t.string()),
        }
    ).named(
        "SequenceReadsAnalysis"
    )  # kind: OBJECT
    t.struct(
        {
            "usualSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "drmSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "unusualSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "unusualApobecSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "unusualNonApobecSites": t.optional(
                t.array(g("SequenceReadsHistogramBin"))
            ),
            "apobecSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "apobecDrmSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "stopCodonSites": t.optional(t.array(g("SequenceReadsHistogramBin"))),
            "numPositions": t.optional(t.integer()),
        }
    ).named(
        "SequenceReadsHistogram"
    )  # kind: OBJECT
    t.struct(
        {
            "percentStart": t.optional(t.float()),
            "percentStop": t.optional(t.float()),
            "count": t.optional(t.integer()),
        }
    ).named(
        "SequenceReadsHistogramBin"
    )  # kind: OBJECT
    t.struct(
        {
            "usualSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "drmSites": t.optional(t.array(g("SequenceReadsHistogramByCodonCountBin"))),
            "unusualSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "unusualApobecSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "unusualNonApobecSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "apobecSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "apobecDrmSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "stopCodonSites": t.optional(
                t.array(g("SequenceReadsHistogramByCodonCountBin"))
            ),
            "numPositions": t.optional(t.integer()),
        }
    ).named(
        "SequenceReadsHistogramByCodonCount"
    )  # kind: OBJECT
    t.struct(
        {
            "cutoff": t.optional(t.integer()),
            "count": t.optional(t.integer()),
        }
    ).named(
        "SequenceReadsHistogramByCodonCountBin"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "strain": t.optional(t.string()),
            "allReads": t.optional(t.array(g("PositionCodonReadsInput"))),
            "minPrevalence": t.optional(t.float()),
            "minCodonCount": t.optional(t.integer()),
            "minReadDepth": t.optional(t.integer()),
        }
    ).named(
        "SequenceReadsInput"
    )  # kind: INPUT_OBJECT
    t.struct(
        {
            "text": t.optional(t.string()),
            "publishDate": t.optional(t.string()),
        }
    ).named(
        "SierraVersion"
    )  # kind: OBJECT
    t.struct(
        {
            "name": t.optional(t.string()),
            "display": t.optional(t.string()),
        }
    ).named(
        "Strain"
    )  # kind: OBJECT
    t.string().named("StrainEnum")  # kind: ENUM
    t.string().named("Subtype")  # kind: ENUM
    t.struct(
        {
            "header": t.optional(t.string()),
            "sequence": t.optional(t.string()),
        }
    ).named(
        "UnalignedSequenceInput"
    )  # kind: INPUT_OBJECT
    t.struct(
        {
            "header": t.optional(t.string()),
            "sequence": t.optional(t.string()),
            "MD5": t.optional(t.string()),
            "SHA512": t.optional(t.string()),
        }
    ).named(
        "UnalignedSequenceOutput"
    )  # kind: OBJECT
    t.string().named("ValidationLevel")  # kind: ENUM
    t.struct(
        {
            "level": t.optional(t.string()),
            "message": t.optional(t.string()),
        }
    ).named(
        "ValidationResult"
    )  # kind: OBJECT
    t.struct(
        {
            "currentVersion": t.optional(g("DrugResistanceAlgorithm")),
            "currentProgramVersion": t.optional(g("SierraVersion")),
            "sequenceAnalysis": t.optional(t.array(g("SequenceAnalysis"))),
            "sequenceReadsAnalysis": t.optional(t.array(g("SequenceReadsAnalysis"))),
            "mutationsAnalysis": t.optional(g("MutationsAnalysis")),
            "patternAnalysis": t.optional(t.array(g("MutationsAnalysis"))),
            "genes": t.optional(t.array(g("Gene"))),
            "mutationPrevalenceSubtypes": t.optional(
                t.array(g("MutationPrevalenceSubtype"))
            ),
        }
    ).named(
        "Viewer"
    )  # kind: OBJECT
    g.expose(
        currentVersion=remote.query(
            t.struct({}), t.optional(g("DrugResistanceAlgorithm"))
        ),
        currentProgramVersion=remote.query(
            t.struct({}), t.optional(g("SierraVersion"))
        ),
        sequenceAnalysis=remote.query(
            t.struct(
                {
                    "sequences": t.optional(t.array(g("UnalignedSequenceInput"))),
                }
            ),
            t.optional(t.array(g("SequenceAnalysis"))),
        ),
        sequenceReadsAnalysis=remote.query(
            t.struct(
                {
                    "sequenceReads": t.optional(t.array(g("SequenceReadsInput"))),
                }
            ),
            t.optional(t.array(g("SequenceReadsAnalysis"))),
        ),
        mutationsAnalysis=remote.query(
            t.struct(
                {
                    "mutations": t.optional(t.array(t.string())),
                }
            ),
            t.optional(g("MutationsAnalysis")),
        ),
        patternAnalysis=remote.query(
            t.struct(
                {
                    "patterns": t.optional(t.array(t.array(t.string()))),
                    "patternNames": t.optional(t.array(t.string())),
                }
            ),
            t.optional(t.array(g("MutationsAnalysis"))),
        ),
        genes=remote.query(
            t.struct(
                {
                    "names": t.optional(t.array(t.string())),
                }
            ),
            t.optional(t.array(g("Gene"))),
        ),
        mutationPrevalenceSubtypes=remote.query(
            t.struct({}), t.optional(t.array(g("MutationPrevalenceSubtype")))
        ),
        viewer=remote.query(t.struct({}), t.optional(g("Viewer"))),
    )
