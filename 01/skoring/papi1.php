<?php
// Misalkan hasil1 sampai dengan hasil20 adalah sebagai berikut (nilai antara 1 dan 10, boleh ada yang sama)
$Activity_Vigorous_type_V = 5;
$Activity_Pacce_T = 3;
$Leadership_Case_in_decision_Making_I = 8;
$Leadership_need_to_control_others_P = 1;
$Leadership_leadership_role_L = 9;
$Work_Direction_need_to_achieve_A = 4;
$Work_Direction_role_ofHard_intense_worker_G = 10;
$Work_Direction_need_to_finish_a_task_N = 7;
$Followership_needs_for_rules_and_supervision_W = 2;
$Followership_need_to_support_autority_F = 10;
$Temperament_need_to_be_forcefull_K_X = 1;
$Temperament_emotional_restraint_E = 6;
$Temperament_need_for_change_Z_X = 4;
$Work_Style_organized_type_C = 8;
$Work_Style_INterest_in_working_with_details_D = 7;
$Work_Style_theoritical_type_R = 5;
$Social_Nature_needs_for_clorence_and_affection_O = 9;
$Social_Nature_need_to_belong_to_groups_B = 10;
$Social_Nature_social_extension_S = 3;
$Social_Nature_need_to_be_noticed_x = 6;

// Masukkan semua hasil ke dalam array asosiatif
$hasil = [
    'Activity_Vigorous_type_V' => $Activity_Vigorous_type_V,
    'Activity_Pacce_T' => $Activity_Pacce_T,
    'Leadership_Case_in_decision_Making_I' => $Leadership_Case_in_decision_Making_I,
    'Leadership_need_to_control_others_P' => $Leadership_need_to_control_others_P,
    'Leadership_leadership_role_L' => $Leadership_leadership_role_L,
    'Work_Direction_need_to_achieve_A' => $Work_Direction_need_to_achieve_A,
    'Work_Direction_role_ofHard_intense_worker_G' => $Work_Direction_role_ofHard_intense_worker_G,
    'Work_Direction_need_to_finish_a_task_N' => $Work_Direction_need_to_finish_a_task_N,
    'Followership_needs_for_rules_and_supervision_W' => $Followership_needs_for_rules_and_supervision_W,
    'Followership_need_to_support_autority_F' => $Followership_need_to_support_autority_F,
    'Temperament_need_to_be_forcefull_K_X' => $Temperament_need_to_be_forcefull_K_X,
    'Temperament_emotional_restraint_E' => $Temperament_emotional_restraint_E,
    'Temperament_need_for_change_Z_X' => $Temperament_need_for_change_Z_X,
    'Work_Style_organized_type_C' => $Work_Style_organized_type_C,
    'Work_Style_INterest_in_working_with_details_D' => $Work_Style_INterest_in_working_with_details_D,
    'Work_Style_theoritical_type_R' => $Work_Style_theoritical_type_R,
    'Social_Nature_needs_for_clorence_and_affection_O' => $Social_Nature_needs_for_clorence_and_affection_O,
    'Social_Nature_need_to_belong_to_groups_B' => $Social_Nature_need_to_belong_to_groups_B,
    'Social_Nature_social_extension_S' => $Social_Nature_social_extension_S,
    'Social_Nature_need_to_be_noticed_x' => $Social_Nature_need_to_be_noticed_x
];

// Urutkan array berdasarkan nilai dari yang tertinggi ke yang terendah
arsort($hasil);

// Tampilkan semua hasil yang sudah diurutkan
$no=1;
foreach ($hasil as $key => $value) {
    echo $no .". ".  $key . " dengan nilai " . $value . "\n";echo "<br>";
    $no++;
}
?>
