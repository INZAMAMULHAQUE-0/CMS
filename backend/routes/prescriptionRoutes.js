const express = require('express');
const router = express.Router();
const prescriptionController = require('../Controller/prescriptionController');

router.get('/', prescriptionController.getPrescriptions)
router.post('/', prescriptionController.createPrescription);
router.get('/:id', prescriptionController.getPrescriptionById);
router.put('/:id',prescriptionController.updatePrescription);
router.delete('/:id', prescriptionController.deletePrescription);

module.exports = router;
