function buildFilesIn (evt) {
  switch(evt.params.data.id) {
    case "1":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CHUMsess1_rest1.mnc"
	}
}

 break
    case "2":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CHUMsess2_rest1.mnc"
	}
}

 break
    case "3":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CHUSsess1_rest1.mnc"
	}
}

 break
    case "4":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CHUSsess2_rest1.mnc"
	}
}

 break
    case "5":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CHUSsess3_rest1.mnc"
	}
}

 break
    case "6":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CINQsess1_rest1.mnc"
	}
}

 break
    case "7":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CINQsess2_rest1.mnc"
	}
}

 break
    case "8":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_CINQsess3_rest1.mnc"
	}
}

 break
    case "9":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_ISMDsess1_rest1.mnc"
	}
}

 break
    case "10":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_ISMDsess2_rest1.mnc"
	}
}

 break
    case "11":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_ISMDsess3_rest1.mnc"
	}
}

 break
    case "12":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_IUGMsess1_rest1.mnc"
	}
}

 break
    case "13":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_IUGMsess2_rest1.mnc"
	}
}

 break
    case "14":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_IUGMsess3_rest1.mnc"
	}
}

 break
    case "15":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_MNIsess1_rest1.mnc"
	}
}

 break
    case "16":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_MNIsess2_rest1.mnc"
	}
}

 break
    case "17":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_MNIsess2_rest2.mnc"
	}
}

 break
    case "18":
      var filesIn = {
	"session1": {
		"run1": "HpPreprocessFinal12202017\/fmri\/fmri_ssimon_MNIsess3_rest1.mnc"
	}
}

 break
};
return filesIn 
}

var opt = {
	"opt": {
		"report_rmap": {
			"avg": {
				"limits": [0,0.7],
				"thresh": 0.4
			},
			"ind": {
				"limits": [0,0.7],
				"thresh": 0.4
			}
		},
		"flag_sym": 1,
		"flag_rand": 0,
		"label_network": "rois",
		"flag_p2p": 1,
		"flag_rmap": 1,
		"flag_global_prop": 1,
		"flag_local_prop": 1,
		"connectome": {
			"type": "R",
			"thresh": {
				"type": "sparsity_pos",
				"param": 0.2
			}
		},
		"psom": {
			"path_logs": "\/home\/ycollinv\/connectomeTestRetest-12202017\/logs\/"
		},
		"folder_out": "connectomeTestRetest-12202017",
		"flag_verbose": 1,
		"flag_test": 0,
		"graph_prop": {
			"global_efficiency": {
				"type": "global_efficiency"
			},
			"avg_clustering": {
				"type": "avg_clustering"
			},
			"modularity": {
				"type": "modularity"
			},
			"Dcentrality_CER": {
				"param": 1,
				"type": "Dcentrality"
			},
			"Dcentrality_LIM": {
				"param": 2,
				"type": "Dcentrality"
			},
			"Dcentrality_MOT": {
				"param": 3,
				"type": "Dcentrality"
			},
			"Dcentrality_VIS": {
				"param": 4,
				"type": "Dcentrality"
			},
			"Dcentrality_DMN": {
				"param": 5,
				"type": "Dcentrality"
			},
			"Dcentrality_FPN": {
				"param": 6,
				"type": "Dcentrality"
			},
			"Dcentrality_SAL": {
				"param": 7,
				"type": "Dcentrality"
			},
			"clustering_CER": {
				"param": 1,
				"type": "clustering"
			},
			"clustering_LIM": {
				"param": 2,
				"type": "clustering"
			},
			"clustering_MOT": {
				"param": 3,
				"type": "clustering"
			},
			"clustering_VIS": {
				"param": 4,
				"type": "clustering"
			},
			"clustering_DMN": {
				"param": 5,
				"type": "clustering"
			},
			"clustering_FPN": {
				"param": 6,
				"type": "clustering"
			},
			"clustering_SAL": {
				"param": 7,
				"type": "clustering"
			},
			"local_eff_CER": {
				"param": 1,
				"type": "local_efficiency"
			},
			"local_eff_LIM": {
				"param": 2,
				"type": "local_efficiency"
			},
			"local_eff_MOT": {
				"param": 3,
				"type": "local_efficiency"
			},
			"local_eff_VIS": {
				"param": 4,
				"type": "local_efficiency"
			},
			"local_eff_DMN": {
				"param": 5,
				"type": "local_efficiency"
			},
			"local_eff_FPN": {
				"param": 6,
				"type": "local_efficiency"
			},
			"local_eff_SAL": {
				"param": 7,
				"type": "local_efficiency"
			},
			"p2p_CER_X_CER": {
				"param": [1,1],
				"type": "p2p"
			},
			"p2p_CER_X_LIM": {
				"param": [1,2],
				"type": "p2p"
			},
			"p2p_CER_X_MOT": {
				"param": [1,3],
				"type": "p2p"
			},
			"p2p_CER_X_VIS": {
				"param": [1,4],
				"type": "p2p"
			},
			"p2p_CER_X_DMN": {
				"param": [1,5],
				"type": "p2p"
			},
			"p2p_CER_X_FPN": {
				"param": [1,6],
				"type": "p2p"
			},
			"p2p_CER_X_SAL": {
				"param": [1,7],
				"type": "p2p"
			},
			"p2p_LIM_X_LIM": {
				"param": [2,2],
				"type": "p2p"
			},
			"p2p_LIM_X_MOT": {
				"param": [2,3],
				"type": "p2p"
			},
			"p2p_LIM_X_VIS": {
				"param": [2,4],
				"type": "p2p"
			},
			"p2p_LIM_X_DMN": {
				"param": [2,5],
				"type": "p2p"
			},
			"p2p_LIM_X_FPN": {
				"param": [2,6],
				"type": "p2p"
			},
			"p2p_LIM_X_SAL": {
				"param": [2,7],
				"type": "p2p"
			},
			"p2p_MOT_X_MOT": {
				"param": [3,3],
				"type": "p2p"
			},
			"p2p_MOT_X_VIS": {
				"param": [3,4],
				"type": "p2p"
			},
			"p2p_MOT_X_DMN": {
				"param": [3,5],
				"type": "p2p"
			},
			"p2p_MOT_X_FPN": {
				"param": [3,6],
				"type": "p2p"
			},
			"p2p_MOT_X_SAL": {
				"param": [3,7],
				"type": "p2p"
			},
			"p2p_VIS_X_VIS": {
				"param": [4,4],
				"type": "p2p"
			},
			"p2p_VIS_X_DMN": {
				"param": [4,5],
				"type": "p2p"
			},
			"p2p_VIS_X_FPN": {
				"param": [4,6],
				"type": "p2p"
			},
			"p2p_VIS_X_SAL": {
				"param": [4,7],
				"type": "p2p"
			},
			"p2p_DMN_X_DMN": {
				"param": [5,5],
				"type": "p2p"
			},
			"p2p_DMN_X_FPN": {
				"param": [5,6],
				"type": "p2p"
			},
			"p2p_DMN_X_SAL": {
				"param": [5,7],
				"type": "p2p"
			},
			"p2p_FPN_X_FPN": {
				"param": [6,6],
				"type": "p2p"
			},
			"p2p_FPN_X_SAL": {
				"param": [6,7],
				"type": "p2p"
			},
			"p2p_SAL_X_SAL": {
				"param": [7,7],
				"type": "p2p"
			}
		},
		"rmap": {
			"ind_seeds": {
				"CER": 1,
				"LIM": 2,
				"MOT": 3,
				"VIS": 4,
				"DMN": 5,
				"FPN": 6,
				"SAL": 7
			}
		}
	},
	"network": "old\/HP_project\/cambridge\/atlas\/template_cambridge_basc_multiscale_sym_scale007.mnc",
	"seeds": "old\/HP_project\/cambridge\/seeds\/ccna_seeds_cambridge7.csv"
}

